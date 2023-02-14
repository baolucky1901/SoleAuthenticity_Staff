import {
  Typography,
  Box,
  Card,
  Container,
  Button,
  styled
} from '@mui/material';
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Link from 'src/components/Link';
import Head from 'next/head';

import Logo from 'src/components/LogoSign';
import Hero from 'src/content/Overview/Hero';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
`
);

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

function Overview() {
  return (
    <OverviewWrapper>
      <Head>
        <title>Welcome to SoleAuthenticity - Identity | Responsibility | Prestige</title>
      </Head>
      <HeaderWrapper>
        <Container maxWidth="lg">
        
          <Box display="flex" alignItems="center">
          <Logo />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex={1}
            >
              <Box />
              <Box>
                <Button
                  component={Link}
                  href="/management/transactions"
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  Go to Manage
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </HeaderWrapper>
      <Hero />
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        {/* <Typography textAlign="center" variant="subtitle1">
          Crafted by{' '}
          <Link
            href="https://bloomui.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            BloomUI.com
          </Link>
        </Typography> */}
      </Container>
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

// import Head from 'next/head';
// import SidebarLayout from '@/layouts/SidebarLayout';
// import PageHeader from '@/content/Management/Transactions/PageHeader';
// import PageTitleWrapper from '@/components/PageTitleWrapper';
// import { Grid, Container } from '@mui/material';
// import Footer from '@/components/Footer';

// import RecentOrders from '@/content/Management/Transactions/RecentOrders';

// function ApplicationsTransactions() {
//   return (
//     <>
//       <Head>
//         <title>Transactions - Applications</title>
//       </Head>
//       <PageTitleWrapper>
//         <PageHeader />
//       </PageTitleWrapper>
//       <Container maxWidth="lg">
//         <Grid
//           container
//           direction="row"
//           justifyContent="center"
//           alignItems="stretch"
//           spacing={3}
//         >
//           <Grid item xs={12}>
//             <RecentOrders />
//           </Grid>
//         </Grid>
//       </Container>
//       <Footer />
//     </>
//   );
// }

// ApplicationsTransactions.getLayout = (page) => (
//   <SidebarLayout>{page}</SidebarLayout>
// );

// export default ApplicationsTransactions;

