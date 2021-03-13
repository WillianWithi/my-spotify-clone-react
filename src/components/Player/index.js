import React from 'react';
import Slider from 'rc-slider';
import { Container, Current, Volume, Progress, Controls, ProgressSlider, Time, Content } from './styles';

import volumeIcon from '../../assets/images/volume.svg';
import shuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';


const Player = () => (
    <Container>
        <Current>
            <img
                src="https://upload.wikimedia.org/wikipedia/en/0/02/Mezmerize-LP.jpg"
                alt="cover"
            />

            <div>
                <span>Cigaro</span>
                <small>System of a Down</small>
            </div>
        </Current>



        <Content>

            <Progress>
                <Controls>
                    <button>
                        <img src={shuffleIcon} alt="Shuffle" />
                    </button>
                    <button>
                        <img src={BackwardIcon} alt="Backward" />
                    </button>
                    <button>
                        <img src={PlayIcon} alt="Play" />
                    </button>
                    <button>
                        <img src={ForwardIcon} alt="Forward" />
                    </button>
                    <button>
                        <img src={RepeatIcon} alt="Repeat" />
                    </button>
                </Controls>
            </Progress>

            <Time>
                <span>1:39</span>
                <ProgressSlider>
                    <Slider
                        railStyle={{ background: '#404040', borderRadius: 10 }}
                        trackStyle={{ background: '#1ED760' }}
                        handleStyle={{ border: 0 }}
                    />
                </ProgressSlider>
                <span>4:24</span>
            </Time>
        </Content>


        <Volume>
            <img src={volumeIcon} alt="Volume" />
            <Slider
                railStyle={{ background: '#404040', borderRadius: 10 }}
                trackStyle={{ background: '#fff' }}
                handleStyle={{ display: 'none' }}
                value={100}
            />
        </Volume>
    </Container>
);

export default Player;