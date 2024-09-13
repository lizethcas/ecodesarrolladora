// src/store/linksSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Link {
  to: string;
  label: string;
}

interface LinksState {
  links: Link[];
}

const initialState: LinksState = {
  links: [],
};

const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    setLinks: (state, action: PayloadAction<Link[]>) => {
      state.links = action.payload;
    },
    addLink: (state, action: PayloadAction<Link>) => {
      state.links.push(action.payload);
    },
    // Otros reducers si son necesarios...
  },
});

export const { setLinks, addLink } = linksSlice.actions;
export default linksSlice.reducer; 
