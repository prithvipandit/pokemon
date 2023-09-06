import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

interface MultiSelectDropdownProps {
  options: string[];
  selectedOptions: string[];
  onSelectedOptionsChange: (newSelectedOptions: string[]) => void;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ options, selectedOptions, onSelectedOptionsChange }) => {
  return (
    <Autocomplete
      multiple
      id="multi-select-dropdown"
      options={options}
      value={selectedOptions}
      onChange={(_, newValue) => {
        onSelectedOptionsChange(newValue);
      }}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox checked={selected} />
          {option}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Select Types"
          placeholder="Select Types"
        />
      )}
    />
  );
};

export default MultiSelectDropdown;
