import styled from 'styled-components'

export const DropdownContainer = styled.div`
  .dropdown-item {
    /* z-index: 99 !important; */
    display: flex;
    align-items: center;
    height: 100%;

    a {
      display: flex;
      align-items: center;

      &:hover {
        cursor: pointer;
      }
    }

    span {
      display: flex;
      align-items: center;

      svg {
        margin-left: 10px;
      }
    }
  }

  .dropdown-content {
    position: absolute;
    z-index: 99 !important;
  }
`
