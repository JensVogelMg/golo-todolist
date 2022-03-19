import { Metadata } from "Metadata";
import { Todo } from "Todo";
import { v4 } from 'uuid'

const todo: Todo<Metadata> = {
  description: 'TypeScript lernen',
  status: 'open',
  data: {
    assignee: 'ghostface'
  }
}
