import { Box } from "@mui/system";
import CircleIcon from '@mui/icons-material/Circle';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import React from "react";

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#00a896',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

const labels = {
    0: 'Learning',
    1: 'Fundamentals',
    2: 'Basic',
    3: 'Intermediate',
    4: 'Good',
    5: 'Advance',
  };
  
  function getLabelText(value) {
    return `${value} Circle${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  
  export default function RatingSkills({ exactValue }) {
    const [value, setValue] = React.useState(exactValue);
    const [hover, setHover] = React.useState(-1);
  
    return (
      <Box
        sx={{
          width: 200,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <StyledRating
          name="hover-feedback"
          value={value}
          precision={1}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          icon={<CircleIcon fontSize="inherit" />}
          emptyIcon={<CircleIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          readOnly
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
    );
  }