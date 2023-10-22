import { useState } from "react";
import burger from "../assets/menu.png";
import {styled} from 'styled-components'

const List = styled.div`
  padding: 8px;
  font-size: 16px;
  color: white;
  background-color: #999;
  p{
    margin: 0;
    padding: 8px;
  }
  p:active{
    color: black;
    background-color: white;
  }
`;


const Header = styled.header`
position: absolute;



#icon{

  height: 43px;
    width: 43px
}

#nav-line{

    /* height: 52px; */
    padding-left: 4px;
}

`


export default function Nav({ locations, setLocation }) {
  const [show, setShow] = useState(false);

  return (
    <Header >
      <div id="nav-line">
        <img
        alt='menu'
          id="icon"
          onClick={() => setShow((v) => !v)}
          src={burger}
        />
      </div>
      {show && (
        <List>
          {locations.map((item, index) => {
            return (
              <p
                
                onClick={() => setLocation(item)}
                key={index}
              >
                {item.name}
              </p>
            );
          })}
        </List>
      )}
    </Header>
  );
}

