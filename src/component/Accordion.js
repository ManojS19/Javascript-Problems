import React, { useState } from 'react'

const Accordion = () => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const [accordionNum, setAccordionNum] = useState(0);

    const handleAccordionClick = (num) => {
        setIsAccordionOpen(!isAccordionOpen);
        setAccordionNum(num)
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: 4,
                width: "80%",
                margin: "20px 10px 5px 10px",
                padding: "5px 20px"
            }}>
                <div>
                    <p style={{ fontSize: "16px" }}>Accordion 1</p>
                </div>
                <div>
                    {
                        (isAccordionOpen && accordionNum === 1) ? (
                            <p style={{ fontSize: "15px", fontWeight: 700, cursor: "pointer" }} onClick={() => handleAccordionClick(1)}>-</p>
                        ) : (
                            <p style={{ fontSize: "15px", fontWeight: 700, cursor: "pointer" }} onClick={() => handleAccordionClick(1)}>+</p>
                        )
                    }
                </div>
            </div>

            {(isAccordionOpen && accordionNum === 1) && (
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    borderRadius: 4,
                    width: "80%",
                    margin: "20px 10px",
                    padding: "5px 20px"
                }}>
                    <div>
                        <p style={{ fontSize: "16px" }}>Accordion 1 Details</p>
                    </div>

                </div>
            )}

            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: 4,
                width: "80%",
                margin: "20px 10px 5px 10px",
                padding: "5px 20px"
            }}>
                <div>
                    <p style={{ fontSize: "16px" }}>Accordion 2</p>
                </div>
                <div>
                    {
                        (isAccordionOpen && accordionNum === 2) ? (
                            <p style={{ fontSize: "15px", fontWeight: 700, cursor: "pointer" }} onClick={() => handleAccordionClick(2)}>-</p>
                        ) : (
                            <p style={{ fontSize: "15px", fontWeight: 700, cursor: "pointer" }} onClick={() => handleAccordionClick(2)}>+</p>
                        )
                    }
                </div>
            </div>

            {(isAccordionOpen && accordionNum === 2) && (
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    borderRadius: 4,
                    width: "80%",
                    margin: "20px 10px",
                    padding: "5px 20px"
                }}>
                    <div>
                        <p style={{ fontSize: "16px" }}>Accordion 2 Details</p>
                    </div>

                </div>
            )}


        </div>
    )
}

export default Accordion