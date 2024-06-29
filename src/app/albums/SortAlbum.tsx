import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { Button, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import Check from '@mui/icons-material/Check';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import { SetQueryParam } from '@/hooks/useQueryParam';
type SortAlbumProps = {
  sort?: string;
  setSort: SetQueryParam<string>;
};

const sortableFields = [
  {
    id: 'title',
    label: 'Title',
  },
  { id: 'user', label: 'Author' },
];

export function SortAlbum({ sort, setSort }: SortAlbumProps) {
  return (
    <PopupState variant="popover" popupId="sort-album">
      {(popupState) => (
        <>
          <Button className="!text-white" endIcon={<KeyboardArrowDownRoundedIcon />} {...bindTrigger(popupState)}>
            Sort
          </Button>
          <Menu {...bindMenu(popupState)}>
            {sortableFields.map((field) => (
              <MenuItem
                key={field.id}
                className="!justify-between"
                onClick={() => {
                  setSort(sort === field.id ? '' : field.id);
                }}
              >
                {field.label}
                <ListItemIcon
                  sx={{ marginLeft: 2, visibility: sort === field.id ? 'visible' : 'hidden', minWidth: '0 !important' }}
                >
                  <Check />
                </ListItemIcon>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );
}
