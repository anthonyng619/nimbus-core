/**
 * @license
 * Copyright 2016-2019 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

import { Component, Input } from '@angular/core';
import { Param } from '../../../shared/param-state';
import { BaseElement } from '../base-element.component';

/**
 * \@author Dinakar.Meda
 * \@whatItDoes
 *
 * \@howToUse
 *
 */
@Component({
  selector: 'nm-field-value',
  template: `
    <div [hidden]="!element?.visible">
      <!-- <label>{{label}}</label> -->
      <nm-input-label
        *ngIf="!isLabelEmpty"
        [element]="element"
        [required]="false"
      >
      </nm-input-label>
      <p style="margin-bottom:0rem;">{{ element.leafState }}</p>
    </div>
  `
})
export class FieldValue extends BaseElement {
  @Input() element: Param;

  ngOnInit() {
    super.ngOnInit();
  }
}
