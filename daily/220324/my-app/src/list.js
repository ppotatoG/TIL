import React, { useState, useEffect } from 'react';
import axios from 'axios';


const List = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 users 를 초기화하고
          setError(null);
          setUsers(null);

          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
          const response = await axios.get(
            'https://kr-api.spooncast.net/lives/popular/'
          );
          setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
  
      fetchUsers();
    }, []);

    if (loading) return <p>로딩중..</p>;
    if (error) return <p>에러가 발생했습니다</p>;
    if (!users) return null;

    const data = Object.entries(users.results).map(list => list[1]);

    const userList = data.map((user) => {
        return {
                'user.author.nickname' : user.author.nickname,
                'user.title' : user.title,
                'user.img_url' : user.img_url,
                'user.like_count' : user.like_count,
                'user.member_count' : user.member_count,
                'user.total_member_count' : user.total_member_count
            };
    })

    const box = Object.entries(userList).map((val, idx) => {
        return (
            <p key={idx}>
                {
                    Object.entries(val[1]).map((val2, idx2) => {
                        console.log(val2)
                        return (
                            <p key={idx2}>{val2}</p>
                        )
                    })
                }
            </p>
        );
    })

    return (
        <div>{box}</div>
    )
};

export default List;