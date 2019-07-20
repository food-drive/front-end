import React, { useCallback, useState, useMemo } from 'react';
import {
  IconButton, Popper, List, Paper, ListItem, FormControlLabel, Checkbox, ClickAwayListener,
} from '@material-ui/core';

import { FilterList as FilterListIcon } from '@material-ui/icons';
import { arrayOf, string, shape, bool, func } from 'prop-types';

const FilterList = ({ colField, filterList, setFilterList }) => {
  const { set: list } = useMemo(() => (
    filterList.find(({ field }) => field === colField)
  ), [colField, filterList]);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState();

  const openFilterList = useCallback((e) => {
    setOpen(true);
    setAnchorEl(e.currentTarget);
  }, [setOpen, setAnchorEl]);

  const updateFilter = useCallback((inputValue) => {
    const newSet = list.map(({ checked, value }) => ({
      value,
      checked: value === inputValue ? !checked : checked,
    }));
    setFilterList(
      filterList.map(({ field, set: filterSet }) => ({
        field,
        set: field === colField ? newSet : filterSet,
      })),
    );
  }, [colField, filterList, list, setFilterList]);

  return (
    <IconButton
      onClick={openFilterList}
    >
      <FilterListIcon fontSize="small" />
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <Popper open={open} anchorEl={anchorEl} placement="right-start">
          <Paper>
            <List>
              {
                list.map(({ checked, value }) => (
                  <ListItem key={value}>
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked={checked}
                          value={value}
                          onChange={() => updateFilter(value)}
                        />
                      )}
                      label={value}
                    />
                  </ListItem>
                ))
              }
            </List>
          </Paper>
        </Popper>
      </ClickAwayListener>
    </IconButton>
  );
};

FilterList.propTypes = {
  colField: string.isRequired,
  filterList: arrayOf(shape({
    field: string.isRequired,
    set: arrayOf(shape({
      checked: bool.isRequired,
      value: string.isRequired,
    })),
  })).isRequired,
  setFilterList: func.isRequired,
};

export default FilterList;
