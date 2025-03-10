import React, { useState } from "react";

const Accordion = () => {
    const [accordionNum, setAccordionNum] = useState(null);

    const handleAccordionClick = (num) => {
        setAccordionNum((prevNum) => (prevNum === num ? null : num));
    };

    const accordionData = [
        { id: 1, title: "Accordion 1", content: "Accordion 1 fu Details " },
        { id: 2, title: "Accordion 2", content: "Accordion 2 Details" },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            {accordionData.map(({ id, title, content }) => (
                <div key={id} style={{ width: "80%", marginBottom: "10px" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                            borderRadius: 4,
                            padding: "5px 20px",
                            cursor: "pointer",
                        }}
                        onClick={() => handleAccordionClick(id)}
                    >
                        <p style={{ fontSize: "16px" }}>{title}</p>
                        <p style={{ fontSize: "15px", fontWeight: 700 }}>{accordionNum === id ? "-" : "+"}</p>
                    </div>

                    {accordionNum === id && (
                        <div
                            style={{
                                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                                borderRadius: 4,
                                padding: "5px 20px",
                                marginTop: "5px",
                            }}
                        >
                            <p style={{ fontSize: "16px" }}>{content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
