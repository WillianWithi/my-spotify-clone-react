import React from 'react';
import { Container, NewPlaylist, Nav } from './styles';
import addPlaylistIcon from '../../assets/images/add_playlist.svg'

const Sidebar = () => (
    <Container>
        <div>
            <Nav>
                <li>
                    <a href="">Navegar</a>
                </li>
                <li>
                    <a href="">Rádio</a>
                </li>
            </Nav>

            <Nav>

                <li>
                    <span>SUA BIBLIOTECA</span> 
                </li>
           
                <li>
                    <a href="">Seu Daily mix</a>
                </li>
                <li>
                    <a href="">Tocados Recentemente</a>
                </li>
           
                <li>
                    <a href="">Músicas</a>
                </li>
                <li>
                    <a href="">Álbuns</a>
                </li>
            
                <li>
                    <a href="">Artistas</a>
                </li>
                <li>
                    <a href="">Estações</a>
                </li>

                <li>
                    <a href="">Arquivos Locais</a>
                </li>
            
                <li>
                    <a href="">Videos</a>
                </li>
                <li>
                    <a href="">Podcast</a>
                </li>
            </Nav>

        </div>    
        <NewPlaylist>
            <img src={addPlaylistIcon} alt="adicionar playlist" />
            Nova playlist
        </NewPlaylist>    
    </Container>
);

export default Sidebar;