import { NgModule } from '@angular/core';

import { JhipsterproductsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterproductsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterproductsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterproductsSharedCommonModule {}
