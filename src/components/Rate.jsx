import React from "react";
import '../components/Rate.css';

class Rate extends React.Component {
    render() {
        const {name, url, speed, traffic, isSelected} = this.props;
        return (
        <section className={"rate "+ (isSelected?"selected":"")}>
        <h2 className="rate-name">{name}</h2>
        <img className="rate-price" src={url} alt={name}></img>
        <p className="rate-speed">{speed}</p>
        <p className="rate-traffic">{traffic}</p>
        </section>
        );
    }
}

export default Rate;