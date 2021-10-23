import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import searchFill from '@iconify/icons-eva/search-fill';
import { connect } from 'react-redux';
import { styled, alpha } from '@material-ui/core/styles';
import { Box, Input, Button, InputAdornment } from '@material-ui/core';
import { getValues } from '../../redux/actions/index';
import store from '../../redux';
import Loading from '../../components/loading';

const APPBAR_MOBILE = 50;
const APPBAR_DESKTOP = 55;

const SearchbarStyle = styled('div')(({ theme }) => ({
  top: 8,
  left: 60,
  zIndex: 99,
  borderRadius: 5,
  width: '60%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: APPBAR_MOBILE,
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  padding: theme.spacing(0, 3),
  boxShadow: theme.customShadows.z8,
  backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
  [theme.breakpoints.up('md')]: {
    height: APPBAR_DESKTOP,
    width: '80%',
    left: 5,
    top: 20,
    padding: theme.spacing(0, 5)
  }
}));

Searchbar.propTypes = {
  search: PropTypes.object.isRequired,
  photoType: PropTypes.object.isRequired
};

function Searchbar(props) {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  console.log(store.getState().photoType);
  const [, setNewPhotos] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const updatePhoto = async () => {
    const { photoType } = props;
    setLoading(true);
    await props.search(value);
    setNewPhotos(photoType);
    setLoading(false);
  };

  return (
    <div>
      <Loading loading={loading} />
      <SearchbarStyle>
        <Input
          autoFocus
          fullWidth
          disableUnderline
          onChange={handleChange}
          placeholder="Find Something…"
          startAdornment={
            <InputAdornment position="start">
              <Box
                component={Icon}
                icon={searchFill}
                sx={{ color: 'text.disabled', width: 20, height: 20 }}
              />
            </InputAdornment>
          }
          sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
        />
        <Button variant="contained" color="secondary" onClick={() => updatePhoto()}>
          Search
        </Button>
      </SearchbarStyle>
    </div>
  );
}

const mapStateToProps = (state) => {
  const data = state;
  return data;
};

const actionCreators = {
  search: getValues
};

export default connect(mapStateToProps, actionCreators)(Searchbar);
