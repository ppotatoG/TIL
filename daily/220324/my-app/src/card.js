import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./style.css";

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

    const usersInfo = users.results.map(val => [Object.keys(val), Object.values(val)]);
	
	const userList = usersInfo.map((info, idx) => {
		const findValue = (findText) => {
			return info[0].findIndex(val => val == findText);
		}

		const title = info[1][findValue('title')];
		const nickName = info[1][findValue('author')].nickname;
		const imgUrl = info[1][findValue('img_url')];
		const likeCount = info[1][findValue('like_count')];
		const memberCount = info[1][findValue('member_count')];
		const totalMemberCount = info[1][findValue('total_member_count')];
		
		// return [nickName, title, imgUrl, likeCount, memberCount, totalMemberCount];

		return (
		<div className='card' key={idx}>
			<h3 className='card__title'>{title}</h3>
			<div className='card__imgWrap'>
				<img src={imgUrl} />
			</div>
			<p className='card__nickName'>{nickName}</p>
		</div>
		)
	});

    return (
		<div className='wrap'>
			{userList}
		</div>
    )
};

export default List;