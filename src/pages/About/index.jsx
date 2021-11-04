import React from "react";
import { useSelector } from 'react-redux';
import './style.css'

export const About = () => {
    const name = useSelector((store) => store.name);
    const favGenres = useSelector((store) => store.genres);

    return (
        <div className="information">
            <h1>Billie Eilish</h1>
            <h3>{name} writes and sings {favGenres[0]}/{favGenres[1]} type of music</h3>
            <ul>
                <li>An American singer and songwriter. She is best known for her successful debut single, Ocean Eyes.</li>
                <li>She was born and raised in Los Angeles, California. </li>
                <li>Belonging to a family of musicians, she was destined to make a career in performing arts. She joined a choir at the age of 8, and by the time she turned 11, she had begun writing and singing her own songs. </li>
                <li>With the success of the song, Billie released her debut EP, Don’t Smile at Me, in August 2017. </li>
                <li>The EP appeared on several American and international music charts.</li>
                <li>In September 2017, Apple named her their newest Up Next artist. </li>
                <li>She then released her debut album When We All Fall Asleep, Where Do We Go? in March 2019, which was followed by Happier Than Ever, in July 2021.</li>
            </ul>
        </div>
    )
}