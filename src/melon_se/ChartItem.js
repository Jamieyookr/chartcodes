import React, { useState } from "react";
import { Tooltip, OverlayTrigger, Button} from 'react-bootstrap';

import {
    AiFillCaretUp,
    AiFillCaretDown,
    AiOutlineEllipsis,
    AiFillHeart,
    AiOutlineHeart,
    AiOutlineVideoCamera,
} from "react-icons/ai";

const ChartItem = ({ item, clickLike, onPoint }) => {
    const {
        rank,
        title,
        singer,
        poster,
        state,
        id,
        key,
        like,
        done,
        album,
    } = item;

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            <div>
                <img src={poster} style={{width:"180px", padding:"6px 0"}}/> 
                <p style={{paddingTop:"10px"}}>{singer}<br/>{title}<br/>{album}</p>
            </div>
        </Tooltip>
      );

    // const style = {       
    //     background: `url(${poster})`,
    //     backgroundSize: "contain"
    //   }

    return (
        <tr>
            <td>{rank}</td>
            <td className="img">
                <OverlayTrigger placement="right" delay={{ show: 0, hide: 100 }} overlay={renderTooltip} >
                    <Button className='button' variant="success" style={{backgroundImage: `url(${poster})` }}></Button>
                </OverlayTrigger>
                <p>
                    <span>{title}</span>
                    <span>{singer}</span>
                </p>
            </td>
            <td>{album}</td>
            <td className="like">
                <i onClick={() => clickLike(id)}>
                    {done ? <AiFillHeart /> : <AiOutlineHeart />}
                </i>

                {like}
            </td>

            <td>
                <i onClick={() => onPoint(id)}>
                    <AiOutlineVideoCamera />
                </i>
            </td>
            <td>
                <i>
                    {state === "keep" && <AiOutlineEllipsis />}
                    {state === "up" && (
                        <AiFillCaretUp style={{ color: "blue" }} />
                    )}
                    {state === "down" && (
                        <AiFillCaretDown style={{ color: "red" }} />
                    )}
                </i>
            </td>
        </tr>
    );
};

export default ChartItem;
