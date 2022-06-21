import { StyledTableCell, StyledTableRow } from "components/templates/Tables";
import {
    Table,
    TableRow,
    TableBody,
    TableHead,
    TableContainer,
} from "@mui/material";
import Stack from "@mui/material/Stack";

import { BsTrashFill } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

import TableLoadingWrapper from 'components/templates/TableLoadingWrapper';
import Button from 'components/atoms/Button';
import { useNavigate } from 'react-router-dom';



const categories = [
    {
        fname: "Jan",
         lname:"Bagger",
        email: "baggercantbechosers@gmail.com",
        birthday:"",
        roles:"Store Order Carrier"
    },
    {
        fname: "Jan",
         lname:"Bagger",
        email: "baggercantbechosers@gmail.com",
        birthday:"",
        roles:"Store Order Carrier"
    },
    {
        fname: "Jan",
         lname:"Bagger",
        email: "baggercantbechosers@gmail.com",
        birthday:"",
        roles:"Store Order Carrier"
    },
    {
        fname: "Jan",
         lname:"Bagger",
        email: "baggercantbechosers@gmail.com",
        birthday:"",
        roles:"Store Order Carrier"
    },
    {
        fname: "Jan",
         lname:"Bagger",
        email: "baggercantbechosers@gmail.com",
        birthday:"",
        roles:"Store Order Carrier"
    },
    {
        fname: "Jan",
         lname:"Bagger",
        email: "baggercantbechosers@gmail.com",
        birthday:"",
        roles:"Store Order Carrier"
    },
    {
        fname: "Jan",
         lname:"Bagger",
        email: "baggercantbechosers@gmail.com",
        birthday:"",
        roles:"Store Order Carrier"
    },
   
];

const CarrierManagementList = () => {
    const navigate = useNavigate();
    //   const dispatch = useAppDispatch();
    //   const categories = useAppSelector((state) => state.categories.cities);
    //   const loading = useAppSelector((state) => state.categories.loading);

    //   useEffect(() => {
    //     CategoriesService.getAllCategories(dispatch);
    //   }, [dispatch]);

    return (
        <div>
            <TableContainer>
                <Table
                    aria-label="customized table"
                    sx={{
                        minWidth: "100%",
                        borderSpacing: "0 10px",
                        borderBottomWidth: "0px",
                        borderCollapse: "separate",
                    }}
                >
                    <TableLoadingWrapper
                        container
                        coloumns={4}
                        loading={false}
                        message="No categories available"
                        length={10}
                    >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>First Name</StyledTableCell>
                                <StyledTableCell>Last Name</StyledTableCell>
                                <StyledTableCell>Email</StyledTableCell>
                                <StyledTableCell>Birthdate</StyledTableCell>
                                <StyledTableCell>Roles</StyledTableCell>
                                <StyledTableCell></StyledTableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {categories.map((category: any) => (
                                <StyledTableRow key={category.id}>
                                    <StyledTableCell>{category.fname}</StyledTableCell>
                                    <StyledTableCell>{category.lname}</StyledTableCell>
                                    <StyledTableCell>{category.email}</StyledTableCell>
                                    <StyledTableCell>{category.birthday}</StyledTableCell>
                                    <StyledTableCell>{category.roles}</StyledTableCell>

                                    <StyledTableCell></StyledTableCell>


                                    <StyledTableCell align="right">
                                        <Stack direction="row" spacing={2} justifyContent="right">
                                            <Button
                                                // size="large"
                                                variant="contained"
                                                color="primary"
                                                disableElevation
                                                onClick={() =>
                                                    navigate(`/update-category/${category.id}`)
                                                }
                                                sx={{ minWidth: "auto" }}
                                            >
                                                <BsTrashFill />
                                            </Button>
                                            <Button
                                                // size="large"
                                                variant="contained"
                                                color="secondary"
                                                disableElevation
                                                onClick={() =>
                                                    navigate(`/update-category/${category.id}`)
                                                }
                                                sx={{ minWidth: "auto" }}
                                            >
                                                <AiOutlineEdit />
                                            </Button>
                                            <Button
                                                // size="large"
                                                variant="contained"
                                                color="success"
                                                disableElevation
                                                onClick={() =>
                                                    navigate(`/update-category/${category.id}`)
                                                }
                                                sx={{ minWidth: "auto" }}
                                            >
                                                POINT USAGE
                                            </Button>
                                        </Stack>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </TableLoadingWrapper>
                </Table>
            </TableContainer>
        </div>
    );
}


export default CarrierManagementList