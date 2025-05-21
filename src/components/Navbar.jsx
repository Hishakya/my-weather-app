import CloudIcon from "@mui/icons-material/Cloud";
import { Button, TextField } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useState } from "react";

const Navbar = ({ onSearch }) => {
    const [searchCity, SetsearchCity] = useState('')
    const handleSearch = () => {
        if (searchCity.trim()) {
            onSearch(searchCity)
        }
    }
    return (
        <nav
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "30px",
                paddingLeft: "25px",
                paddingRight: "25px"
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <CloudIcon />
                <p style={{ fontWeight: "bold", fontSize: "22 px" }}>Weather</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <TextField
                    style={{
                        width: "22Rem",
                    }}
                    placeholder="Search City Name"
                    variant="outlined"
                    value={searchCity}
                    onChange={(e) => SetsearchCity(e.target.value)}
                />

                <Button
                    variant="contained"
                    style={{ borderRadius: "6px", backgroundColor: "grey" }}
                    onClick={handleSearch()}
                >
                    Search
                </Button>
            </div>
            <div>

            </div>
        </nav>
    );
};

export default Navbar;
