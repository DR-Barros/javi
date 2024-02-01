import React from "react";
import { useNavigate } from "react-router-dom";
import HuirBoton from "../components/HuirBoton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const IndexPage = () => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                position: "relative",
                overflow: "hidden",
                height: "100vh",
                width: "100%",
            }}
        >
            <header style={{
                textAlign: "center",
                justifyContent: "center",
                backgroundColor: "#e1d5e7",
                height: "100vh",
                width: "100%",
            }}>
                <div style={{
                    position: "absolute",
                    top: "20%",
                    width: "100%",
                    textAlign: "center",
                }}>
                    <FontAwesomeIcon icon={faHeart} size="10x" color="red" />
                </div>
                
                <h1 style={{
                    fontSize: "3em",
                    color: "black",
                    position: "absolute",
                    top: "40%",
                    textAlign: "center",
                    width: "100%",
                }}>¿Quieres que ser mi San Valentín?</h1>
                <button
                    onClick={() => navigate('/temporizador')}
                    style={{
                        padding: "10px 20px",
                        fontSize: "1.5em",
                        borderRadius: "10px",
                        cursor: "pointer",
                        position: "absolute",
                        top: "70%",
                        left: "40%",
                    }}
                >Si</button>
                <HuirBoton 
                    texto="No"
                />
            </header>
        </div>
    );
}

export default IndexPage;
