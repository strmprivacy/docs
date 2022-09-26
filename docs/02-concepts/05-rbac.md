---
title: Role-Based Access Control (RBAC)
hide_table_of_contents: false
---

# RBAC

In practice, not all users should be able to view or manage the same resources.
Employees working one department, shouldn't automatically be granted access to all data streams within an organization.
In order to grant permissions to users, we integrated a Role-Based Access Control (RBAC) system.
This system should help organizations to manage resources and be more easily compliant with privacy regulations.
We defined 4 roles: `admin` , `project_admin` , `approver` and `member`.
Users can have one or more roles and are always assigned at least the `member` role.
The user creating an organization is automatically assigned the `admin` role.
When a user is [invited](docs/04-reference/01-cli-reference/strm/invite/users.md) to your organization, only the `member` role is assigned.
Roles can be managed via the [`manage` command in the cli](docs/04-reference/01-cli-reference/strm/manage/user-roles.md).

## Permissions

| Scope        Permission               | Description                                                                                             |
|:--------------------------------------|:--------------------------------------------------------------------------------------------------------|
| organization/manage                   | Create organization handle.                                                                             |
| organization/manage users             | Add and remove users from the organization. Change user roles.                                          |
| organization/create project           | Create a new project within the organization via cli or console.                                        |
| organization/delete project           | Delete a project from an organization, with all its corresponding resources.                            |
| organization/view projects            | List all projects in an organization. Per project list their members.                                   | 
| organization/view installation status | View the status of installation, installed for your organization.                                       |
| project/manage members                | Add and remove users from a project.                                                                    |
| project/create resources              | Create streams, derived streams, batch exporters, batch jobs.                                           |
| project/delete resources              | Delete streams, derived streams, batch exporters, batch jobs.                                           |
| project/view resources                | List and get streams, derived streams, batch exporters, batch jobs.                                     |
| project/create data contracts         | Create a proposal for a data contract, that needs to be reviewed before becoming active.                |
| data_contracts/view                   | List and get data contracts from the project in scope and those that are public.                        |
| data_contracts/review                 | Review data contracts, i.e. validate that the contract is compliant with (company) privacy regulations. |

## Overview of permissions per role

| Scope                                 | `admin` | `project_admin` | `approver` | `member` |
|:--------------------------------------|:-------:|:---------------:|:----------:|:--------:|
| organization/manage                   | &check; |                 |            |          |
| organization/manage users             | &check; |                 |            |          | 
| organization/create project           | &check; |     &check;     |            |          | 
| organization/delete project           | &check; |     &check;     |            |          | 
| organization/view projects            | &check; |     &check;     |            |          | 
| organization/view installation status | &check; |     &check;     |  &check;   | &check;  | 
| project/manage members                | &check; |     &check;     |            |          | 
| project/create resources              | &check; |     &check;     |            | &check;  | 
| project/delete resources              | &check; |     &check;     |            |          | 
| project/view resources                | &check; |     &check;     |  &check;   | &check;  | 
| project/create data contracts         | &check; |     &check;     |  &check;   | &check;  | 
| data_contracts/view                   | &check; |     &check;     |  &check;   | &check;  | 
| data_contracts/review                 | &check; |                 |  &check;   |          | 
