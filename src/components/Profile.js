import {
    Box,
    Paper,
    Container,
    Grid2,
    Typography,
    TextField,
    Button
} from '@mui/material';

const Profile = () => {

    return (
        <Paper styles={styles.formcontainer}>
            <Container>
                <Grid2 container spacing={1}>
                    <Grid2 size={8}></Grid2>
                    <Grid2 size={4} styles={styles.editbutton}>
                        <Button variant="contained">Edit</Button>
                    </Grid2>
                    <Grid2 size={6}>
                        <Typography>Full Name</Typography>
                        <TextField
                            disabled
                            defaultValue="Michael Scott"
                        />
                    </Grid2>
                    <Grid2 size={6}>
                        <Typography>Height</Typography>
                        <TextField
                            disabled
                            defaultValue="6'1"
                        />
                    </Grid2>
                    <Grid2 size={6}>
                        <Typography>Weight</Typography>
                        <TextField
                            disabled
                            defaultValue="185lbs"
                        />
                    </Grid2>
                    <Grid2 size={6}>
                        <Typography>Goal Weight</Typography>
                        <TextField
                            disabled
                            defaultValue="195lbs"
                        />
                    </Grid2>
                    <Grid2 size={6}>
                        <Typography>Activity Level</Typography>
                        <TextField
                            disabled
                            defaultValue="Sedentary"
                        />
                    </Grid2>
                    <Grid2 size={6}>
                        <Typography>Main Goal</Typography>
                        <TextField
                            disabled
                            defaultValue="Gaining Weight"
                        />
                    </Grid2>
                </Grid2>
            </Container>
        </Paper>
    )

};

const styles = {
    formcontainer: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center'
    },
    editbutton: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '50px',
    },
};

export default Profile

