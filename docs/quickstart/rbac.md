---
title: Role-Based Access Control (RBAC)
hide_table_of_contents: false
---

# RBAC

In order to grant permissions to users, we integrated a Role-Based Access Control (RBAC) system. We defined 4
roles: `admin`, `project_admin`, `approver` and `member`.
The user creating an organization is automatically assigned the `admin` role.
Every time a user is [invited](/cli-reference/strm/invite/users.md) to your organization, the `member` role is assigned.
Roles can be managed via the [`manage` command in the cli](/cli-reference/strm/manage/user-roles.md).

## Brief overview of permissions per role


|     Scope      |        Permission         | `admin` | `project_admin` | `approver` | `member` |
|:--------------:|:-------------------------:|:-------:|:---------------:|:----------:|:--------:|
|  organization  |    manage organization    | &check; |                 |            |          |
|  organization  | manage organization users | &check; |                 |            |          | 
|  organization  |      create project       | &check; |     &check;     |            |          | 
|  organization  |      delete project       | &check; |     &check;     |            |          | 
|  organization  |       view projects       | &check; |     &check;     |            |          | 
|  organization  | view installation status  | &check; |     &check;     |  &check;   | &check;  | 
|    project     |      manage members       | &check; |     &check;     |            |          | 
|    project     |     create resources      | &check; |     &check;     |            | &check;  | 
|    project     |     delete resources      | &check; |     &check;     |            |          | 
|    project     |      view resources       | &check; |     &check;     |  &check;   | &check;  | 
|    project     |   create data contracts   | &check; |     &check;     |  &check;   | &check;  | 
| data contracts |           view            | &check; |                 |  &check;   |          | 
| data contracts |          review           | &check; |                 |  &check;   |          | 
