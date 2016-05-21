import { join } from 'path';

import { SeedConfig } from './seed.config';
import { InjectableDependency } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    this.APP_TITLE = 'Angular2 test';
    let additional_deps: InjectableDependency[] = [
      { src: 'ng2-bootstrap/bundles/ng2-bootstrap', inject: 'lib' },
      { src: 'bootstrap/dist/css/bootstrap.css', inject: true },
      { src: 'font-awesome/css/font-awesome.min.css', inject: true }
    ];

    const seedDependencies = this.NPM_DEPENDENCIES;

    this.NPM_DEPENDENCIES = seedDependencies.concat(additional_deps);
  }
}
