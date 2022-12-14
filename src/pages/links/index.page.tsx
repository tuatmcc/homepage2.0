import CustomLink from '../../components/common/AutoLink/AutoLink';

import Page from '~/components/common/Page/Page';

const meta = {
  title: 'Links',
  description: 'Links of TUATMCC',
};

const LinksPage = () => {
  return (
    <Page meta={meta}>
      <CustomLink href="https://qiita.com/Qiita/items/c686397e4a0f4f11683d">
        Markdown記法 チートシート - Qiita
      </CustomLink>
    </Page>
  );
};

export default LinksPage;
