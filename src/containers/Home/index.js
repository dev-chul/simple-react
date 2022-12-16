import logo from '../../logo.svg?url';
import '../../App.css';

import '@/utils/request';
import request from '../../utils/request';

export default function Home () {
    const sampleRequest = () => {
        console.log('onClicked sampleRequest.')
        request('http://146.56.174.154:8100/hello', {}).then((res) => {
            console.log(res);
        });
    };

    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This app is developed using React.
                </p>
                <a
                    className="App-link"
                    href="#"
                    rel="noopener noreferrer"
                    onClick={sampleRequest}
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};