import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { NestedTreeNode } from '../../../../store/admin-menu-store/store/admin-menu-reducer';

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'nested-tree-ui',
  templateUrl: './nested-tree-ui.component.html',
  styleUrls: ['./nested-tree-ui.component.scss'],
})
export class NestedTreeUiComponent implements OnChanges {
  treeControl = new NestedTreeControl<NestedTreeNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<NestedTreeNode>();
  @Input() nodes: NestedTreeNode[] | null = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['nodes']) {
      this.dataSource.data = this.nodes ? this.nodes : [];
    }
  }

  hasChild = (_: number, node: NestedTreeNode) =>
    !!node.children && node.children.length > 0;
}
