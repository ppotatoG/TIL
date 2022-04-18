const App = () => {
    const menu = {
        '카테고리' : [
            '과목 1',
            '과목 2',
            '과목 3',
            '과목 4',
            '과목 5',
            '과목 6',
            '과목 7'
        ],
        '난이도' : [
            '초급',
            '중급',
            '고급'
        ],
        '강사명' : [
            '홍길동',
            '김민지',
            '김민수'
        ]
    }

    const menuElement = Object.keys(menu).map((title, idx) => {
        return (
            <div>
                <h2 key={idx}>{title}</h2>
                <ul>
                    {
                        menu[title].map((depth, idx2) => {
                            return (
                                <li key={idx2}>{depth}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    })

    return (
        <div className="menu">
            {menuElement}
        </div>
    );
}

export default App;