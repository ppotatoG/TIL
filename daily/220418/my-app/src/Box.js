const Boxs = () => {
    const lecture = [
        {
            '타이틀 ' : '타이틀1',
            '카테고리' : '과목 2',
            '난이도' : '초급',
            '강사명' : '김민수',
            '전체 강의' : '28',
            '학습 강의' : '1'
        },
        {
            '타이틀 ' : '타이틀2',
            '카테고리' : '과목 7',
            '난이도' : '고급',
            '강사명' : '홍길동',
            '전체 강의' : '58',
            '학습 강의' : '6'
        },
        {
            '타이틀 ' : '타이틀3',
            '카테고리' : '과목 6',
            '난이도' : '고급',
            '강사명' : '김민지',
            '전체 강의' : '8',
            '학습 강의' : '2'
        },
        {
            '타이틀 ' : '타이틀4',
            '카테고리' : '과목 5',
            '난이도' : '중급',
            '강사명' : '홍길동',
            '전체 강의' : '23',
            '학습 강의' : '10'
        }
    ]

    const boxElement = lecture.map((list, idx, arr) => {
        return (
            <div className="box__component" key={idx}>
                {
                    Object.keys(list).map((val, idx2) => {
                        return (
                            <p key={idx2}>
                                {`${val} : ${Object.values(list)[idx2]}`}
                            </p>
                        )
                    })
                }
            </div>
        )
    })

    return (
        <div className="box">
                {boxElement}
        </div>
    );
}

export default Boxs;