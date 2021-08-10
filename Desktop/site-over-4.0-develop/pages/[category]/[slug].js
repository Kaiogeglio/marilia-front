import CourseScreen, { getContent } from '../../src/components/screens/CourseScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const messages = await getContent(params.slug);

  return {
    props: {
      messages,
    },
  };
}

export default websitePageHOC(CourseScreen);
