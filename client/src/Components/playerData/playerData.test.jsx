import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerData from './PlayerData';

afterEach(rtl.cleanup);

test("Renders Player Names", () => {
    const wrapper = rtl.render(<PlayerData />);
    const playerNames = wrapper.getByText(/item.name/i);
    expect(playerNames).toHaveValue(item.name);
});

test("Renders Player Countries", () => {
    const wrapper = rtl.render(<PlayerData />);
    const playerCountries = wrapper.getByText(/item.country/i);
    expect(playerCountries).toBeVisible();
});