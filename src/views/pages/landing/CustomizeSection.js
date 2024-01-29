// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, CardMedia, Container, Grid, Link, Stack, Typography, CardContent } from '@mui/material';

// assets
import SubCard from 'ui-component/cards/SubCard';
import homepageImg from 'assets/images/landing/AI-QSAR interface_transparent.png';
import { IconCircleCheck } from '@tabler/icons';
import SkeletonTotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| LANDING - CUSTOMIZE ||============================== //

const CustomizeSection = () => {
    const theme = useTheme();
    const listSX = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.7rem',
        padding: '10px 0',
        fontSize: '1rem',
        color: theme.palette.grey[900],
        svg: { color: theme.palette.secondary.main }
    };

    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Grid container justifyContent="space-between" alignItems="center" spacing={{ xs: 1.5, sm: 2.5, md: 3, lg: 5 }}>
                <MainCard content={false} sx={{ marginLeft: 2, marginTop: 8 }}>
                    <CardContent>
                        <Grid item xs={12} md={12} sx={{ img: { width: '100%' }, marginTop: 5, marginBottom: 5, paddingRight: 0 }}>
                            <Stack sx={{ width: '100%', mx: 'auto' }}>
                                <CardMedia component="img" image={homepageImg} alt="Layer" />
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2.5}>
                                <Grid item xs={12} md={12}>
                                    <Grid item xs={12}>
                                        <Typography
                                            variant="h2"
                                            color="primary"
                                            align="center"
                                            sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: 2 }}
                                        >
                                            Introduction
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography sx={listSX}>
                                            <IconCircleCheck size={33} />
                                            The purpose of the AI-QSAR model interface is to provide a robust tool for predicting the plasma
                                            half-life of drugs in six common food animals, including cattle, chickens, goats, sheep, swine,
                                            and turkeys.
                                        </Typography>
                                        <Typography sx={listSX}>
                                            <IconCircleCheck size={25} />
                                            These predictions play a vital role in calculating reliable withdrawal intervals after
                                            extralabel drug use, ensuring the safety of animal-derived food products.
                                        </Typography>
                                        <Typography sx={listSX}>
                                            <IconCircleCheck size={30} />
                                            Easily upload your data file or select the drug and species to receive a predicted plasma
                                            half-life of a drug or drugs in one or more food animal species from our robust AI-QSAR model.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </MainCard>
            </Grid>
        </Container>
    );
};

export default CustomizeSection;
