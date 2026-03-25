import { useEffect } from "react";

const FccCerts = () => {
    useEffect(() => {
        document.title = "Kevin Teah's Keen Turkey | FCC Certs ";
}, []);

    return (
        <section id="fcc-certs">
            <h2>FreecodeCamp Certifications</h2>
            <ul className="fcc-certs">
                <li>
                    <strong>Responsive Web Design</strong> Complete: March 3rd, 2026
                    <ul>
                        <li> <a href="https://www.freecodecamp.org/certification/kteah25/responsive-web-design-v9">Certified in Responsive Web Design</a></li>
                    </ul>
                </li>
            </ul>
        </section>
    );
};

export default FccCerts;