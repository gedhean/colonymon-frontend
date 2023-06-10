import { useState } from 'react';
import PropTypes from 'prop-types';

// next
import Image from 'next/legacy/image';

// material-ui
import { Autocomplete, Box, TextField, Typography } from '@mui/material';

// project imports
import useLocations from 'hooks/useLocations';

const LocationSearchInput = ({ onChange }) => {
  const [search, setSearch] = useState('Fortaleza');
  const [value, setValue] = useState(null);
  const { data, loading } = useLocations(search);

  console.log(value);

  const getLocationLabel = (option) =>
    `(${option.latitude.toFixed(2)}°E ${option.longitude.toFixed(2)}°N ${
      option.elevation
    }m)`;

  const handleOnChange = (_event, newValue) => {
    setValue(newValue);
    onChange(newValue);
  };
  return (
    <Autocomplete
      id="country-select-demo"
      fullWidth
      options={data}
      loading={loading}
      sx={{ minWidth: 300 }}
      autoHighlight
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => `${option.name} ${getLocationLabel(option)}`}
      onChange={handleOnChange}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...{ ...props, key: option.id }}
        >
          {option.country_code && (
            <Image
              loading="lazy"
              width="20"
              height="14"
              src={`https://flagcdn.com/w20/${option.country_code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.country_code.toLowerCase()}.png 2x`}
              alt="Location flag"
            />
          )}
          &nbsp;
          {`${option.name}`}&nbsp;
          <Typography variant="body2">
            {option.admin1} {getLocationLabel(option)}
          </Typography>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Localização"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password' // disable autocomplete and autofill
          }}
          onChange={(event) => setSearch(event.target.value)}
        />
      )}
    />
  );
};

LocationSearchInput.defaultProps = {
  onChange: () => {}
};

LocationSearchInput.propTypes = {
  onChange: PropTypes.func
};

export default LocationSearchInput;
