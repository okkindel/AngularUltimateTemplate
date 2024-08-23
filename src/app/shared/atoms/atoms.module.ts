import { NgModule } from '@angular/core';

import { ButtonImports } from './button';
import { IconImports } from './icon';

const ATOMS = [IconImports, ButtonImports];

@NgModule({ imports: ATOMS, exports: ATOMS })
export class AtomsModule {}
