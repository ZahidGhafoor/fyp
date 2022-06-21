import { Container, Stack } from "@mui/material";
import Button from "components/atoms/Button";
import Banner from "components/templates/Banner";
import BasicCard from "components/templates/BasicCard";
import { useNavigate } from "react-router-dom";
import CarrierManagementList from "./CarrierManagementList";
import CarrierManagementFilter from "./CarrierManagementFilter";

const CarrierManagement = () => {
    const navigate = useNavigate();
    return (
        <Container maxWidth="lg">
            <Banner heading="Carrier Management (89)">
                <Stack direction="row" spacing={2}>
                    <Button
                        color="secondary"
                        variant="contained"
                        sx={{ borderRadius: "25px" }}
                    >
                        Export
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        sx={{ borderRadius: "25px" }}
                        onClick={() => navigate("/add-carrierAccount")}
                    >
                        + Add New
                    </Button>
                </Stack>
            </Banner>
            <BasicCard>
                <CarrierManagementFilter />
            </BasicCard>
            <BasicCard>
                < CarrierManagementList/>
            </BasicCard>
        </Container>
    );
}

export default CarrierManagement