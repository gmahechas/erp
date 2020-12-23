import React from 'react';

import FragmentHco from '@mf-0/utils/hoc/FragmentHco';
import AppBarHoc from '@mf-0/utils/material/AppBarHoc';
import ToolBarHoc from '@mf-0/utils/material/ToolBarHoc';
import ButtonHoc from '@mf-0/utils/material/ButtonHoc';

const HeaderCore = () => {
  return (
    <FragmentHco>
      <AppBarHoc position='static'>
        <ToolBarHoc variant='dense' disableGutters>
          <ButtonHoc variant='contained' color='secondary' size='small'>
            Primer Boton
          </ButtonHoc>
        </ToolBarHoc>
      </AppBarHoc>
    </FragmentHco>
  );
};

export default HeaderCore;
