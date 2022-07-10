```tsx
import {
  Icon16Add,
  Icon24Add,
  Icon32Add,
  Icon40Add,
} from '@pijma/business-icons'
import { Icon } from '@pijma/business-icon'
import { light } from '@pijma/business-theme'
import { Wrapper } from '@pijma/business-wrapper'

export const App = () => (
  <Wrapper
    components={{
      Icon16Add,
      Icon24Add,
      Icon32Add,
      Icon40Add,
    }}
    theme={light}
    breakpoints={[600, 1200]}
  >
    <Icon name="add" size={16} color="black" />
    <Icon name="add" size={24} color="black" />
    <Icon name="add" size={32} color="black" />
    <Icon name="add" size={40} color="black" />
  </Wrapper>
)
```
