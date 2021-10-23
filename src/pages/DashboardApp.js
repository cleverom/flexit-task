import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// material
import { Grid, Container, Stack, Typography } from '@material-ui/core';
// components
import { connect } from 'react-redux';
import { getValues } from '../redux/actions/index';
import Page from '../components/Page';
import { BlogPostCard } from '../components/_dashboard/blog';
import store from '../redux';
import Loading from '../components/loading';

Blog.propTypes = {
  search: PropTypes.object.isRequired,
  photoType: PropTypes.object.isRequired
};

function Blog(props) {
  const { photoType } = props;
  const [loading, setLoading] = useState(false);
  const [, setNewPhotos] = useState([]);
  console.log(store.getState());
  console.log('ddd', props);

  useEffect(() => {
    (async function dataInfo() {
      setLoading(true);
      await props.search('');
      setNewPhotos(photoType);
    })();
    setLoading(false);
  }, []);

  return (
    <>
      <Loading loading={loading} />
      <Page title="Dashboard: Blog | Photo">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Blogs
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {props.photoType.map((post, index) => (
              <BlogPostCard key={post.id} photos={post} index={index} />
            ))}
          </Grid>
        </Container>
      </Page>
    </>
  );
}

const mapStateToProps = (state) => {
  const data = state;
  return data;
};

const actionCreators = {
  search: getValues
};
export default connect(mapStateToProps, actionCreators)(Blog);
