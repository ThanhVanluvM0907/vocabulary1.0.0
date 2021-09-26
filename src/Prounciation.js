import React from 'react';

export default class Prounciation extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            proun: [
                {
                    sourceUK: 'https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/cap/cappu/cappuccino__gb_2.mp3', idUK: 0,
                    sourceUS: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cap/cappu/cappuccino__us_1_rr.mp3', idUS: 1,
                    sourceK: 'https://korean.dict.naver.com/api/nvoice?speaker=mijin&service=dictionary&speech_fmt=mp3&text=%EC%BB%A4%ED%94%BC%EC%88%8D&vcode=342040', idK: '0k'
                },
                {
                    sourceUK: 'https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/cap/cappu/cappuccino__gb_2.mp3', idUK: 2,
                    sourceUS: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cap/cappu/cappuccino__us_1_rr.mp3', idUS: 3,
                    sourceK: 'https://korean.dict.naver.com/api/nvoice?speaker=mijin&service=dictionary&speech_fmt=mp3&text=%EC%BB%A4%ED%94%BC%EC%88%8D&vcode=342040', idK: '1k'
                },
                {
                    sourceUK: 'https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/c/cap/cappu/cappuccino__gb_2.mp3', idUK: 4,
                    sourceUS: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cap/cappu/cappuccino__us_1_rr.mp3', idUS: 5,
                    sourceK: 'https://korean.dict.naver.com/api/nvoice?speaker=mijin&service=dictionary&speech_fmt=mp3&text=%EC%BB%A4%ED%94%BC%EC%88%8D&vcode=342040', idK: '2k'
                },
            ]
        }
    }

    render() {
        return <table className="audio" border="1">
            <thead>
            <tr>
                <th>UK</th>
                <th>US</th>
                <th>Ko</th>
            </tr>
            </thead>
            <tbody>
            {
                this.state.proun.map((item) => {
                    return <tr key={item.idUK}>
                        <td className="UK">
                            <audio src={item.sourceUK} id={item.idUK} controls>
                                UK
                            </audio>
                        </td>
                        <td className="US">
                            <audio src={item.sourceUS} id={item.idUS} controls>
                                US
                            </audio>
                        </td>
                        <td className="KO">
                            <audio src={item.sourceK} id={item.idK} controls>
                                KO
                            </audio>
                        </td>
                    </tr>
                })
            }
            </tbody>
        </table>
    }
}