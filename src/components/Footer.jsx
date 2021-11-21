import React from 'react'
import { Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer py-1 bg-dark fixed-bottom" style={{ height: "80px" }}>
            <p className="text-center text-muted">Cryptoverse © 2021 Company, Inc</p>
            <Stack direction="horizontal" gap={2} className="justify-content-center">
                <Link to="/feedback" style={{ textDecoration: "none" }}>
                    <p className="text-center text-muted">Feedback</p>
                </Link>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                    <p className="text-center text-muted">Contact</p>
                </Link>
            </Stack>
        </footer>
    )
}
export default Footer
