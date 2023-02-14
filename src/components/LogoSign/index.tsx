import {
  Box,
  Tooltip,
  Badge,
  TooltipProps,
  tooltipClasses,
  styled,
  Typography,
  useTheme
} from '@mui/material';
import Link from 'src/components/Link';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        width: 53px;
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
`
);

const LogoSignWrapper = styled(Box)(
  ({theme}) => `
        // width: 52px;
        // height: 38px;
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        border-radius: ${theme.general.borderRadius};
        background-color: transparent;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        // left: 60px;
        margin-left: 60px;
        // margin: 0 auto ${theme.spacing(2)};

          img {
            width: 60%;
            height: 60%;
            display: block;
          }

          span {
            font-size: 7px;
            font-weight: 400;
            margin-left: 7px;
          }
        
`
);

// const LogoSign = styled(Box)(
//   ({ theme }) => `
//         background: ${theme.general.reactFrameworkColor};
//         width: 18px;
//         height: 18px;
//         border-radius: ${theme.general.borderRadiusSm};
//         position: relative;
//         transform: rotate(45deg);
//         top: 3px;
//         left: 17px;

//         &:after, 
//         &:before {
//             content: "";
//             display: block;
//             width: 18px;
//             height: 18px;
//             position: absolute;
//             top: -1px;
//             right: -20px;
//             transform: rotate(0deg);
//             border-radius: ${theme.general.borderRadiusSm};
//         }

//         &:before {
//             background: ${theme.palette.primary.main};
//             right: auto;
//             left: 0;
//             top: 20px;
//         }

//         &:after {
//             background: ${theme.palette.secondary.main};
//         }
// `
// );

// const LogoSignInner = styled(Box)(
//   ({ theme }) => `
//         width: 16px;
//         height: 16px;
//         position: absolute;
//         top: 12px;
//         left: 12px;
//         z-index: 5;
//         border-radius: ${theme.general.borderRadiusSm};
//         background: ${theme.header.background};
// `
// );

const TooltipWrapper = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.colors.alpha.trueWhite[100],
    color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'bold',
    borderRadius: theme.general.borderRadiusSm,
    boxShadow:
      '0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)'
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.colors.alpha.trueWhite[100]
  }
}));

function Logo() {
  const theme = useTheme();

  return (
    <TooltipWrapper
      title="SoleAuthenticity - Identity | Responsibility | Prestige"
      arrow
    >
      <LogoWrapper href="/">
        <Badge
          sx={{
            '.MuiBadge-badge': {
              fontSize: theme.typography.pxToRem(11),
              right: -60,
              top: 12
            }
          }}
          overlap="circular"
          color="success"
          badgeContent="1.0"
        >
          <LogoSignWrapper>
          <img
                  src="/static/images/logo/Logo_SoleAuthenticity.png"
                  alt="Review"
                />
                <Typography variant="h4">
                
                  <b>SoleAuthenticity</b>
                <br />
                
               <span>Identity - Responsibility - Prestige</span> 
              </Typography>
            {/* <LogoSign>
              <LogoSignInner />
            </LogoSign> */}
          </LogoSignWrapper>
        </Badge>
      </LogoWrapper>
    </TooltipWrapper>
  );
}

export default Logo;
