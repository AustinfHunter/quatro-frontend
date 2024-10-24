import {
    Box,
    Paper,
    Container,
    Grid2,
    Typography,
    TextField,
    Button
} from '@mui/material';
import profilePicture from "../images/default_profile_picture.jpg";

const Profile = () => {

    return (
        <Paper>
            <Container styles={styles.formcontainer}>
                <Grid2 container spacing={1}>
                    <Grid2 size={6}>
                        <Box
                            component="img"
                            src={profilePicture}
                            alt="Default Profile Picture"
                            sx = {{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                            }}
                        />
                    </Grid2>
                    <Grid2 size={6} styles={styles.editbutton}>
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

