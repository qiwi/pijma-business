import { create } from '@storybook/theming'

export const theme = create({
  base: 'light',

  colorPrimary: '#272A35',
  colorSecondary: '#FF6F00',

  appBg: '#F9F9F9',
  appContentBg: '#FFF',
  appBorderColor: '#D9D9D9',
  appBorderRadius: 10,

  fontBase:
    '"Sussie Intl", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  fontCode: 'monospace',

  textColor: '#272A35',
  textInverseColor: '#7E7F85',
  textMutedColor: '#7E7F85',

  barTextColor: '#7E7F85',
  barSelectedColor: '#FF6F00',
  barBg: '#FFF',

  inputBg: '#FFF',
  inputBorder: '#7E7F85',
  inputTextColor: '#272A35',
  inputBorderRadius: 10,

  brandTitle: 'Pijma Business',
  brandUrl: '/',
  brandImage:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5IiBoZWlnaHQ9IjIyIiB2aWV3Qm94PSIwIDAgMTc5IDIyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNDcuMzQ0MyAxOC4xNTg2VjMuNzYxMDhINDMuODIwOVYxOC4xNTg2SDQ3LjM0NDNaTTMwLjMzMjUgMTguMTU4NkwzMi4xNDQyIDEwLjg4OTRDMzIuMjc3NiAxMC4zMzI4IDMyLjM3MiA5Ljc2NzUxIDMyLjQyNjcgOS4xOTc3NEgzMi40NjY3QzMyLjUyMDkgOS43Njc1MiAzMi42MTUgMTAuMzMyOCAzMi43NDg0IDEwLjg4OTRMMzQuNTU3NSAxOC4xNTg2SDM4LjQ4NDJMNDIuMTI5MiAzLjc2MTA4SDM4LjQ4NDJMMzYuNTEwOSAxMi43NjExQzM2LjQwNTYgMTMuMjU4MiAzNi4zNDU5IDEzLjc2MzkgMzYuMzMyNiAxNC4yNzE5SDM2LjI5MTdDMzYuMjYgMTMuNzYyIDM2LjE3OSAxMy4yNTYzIDM2LjA1MDEgMTIuNzYxOUwzMy44OTU5IDMuNzYxOTFIMzEuMDUzNEwyOC44Mzg0IDEyLjc2MTlDMjguNzA5OSAxMy4yNTY0IDI4LjYyOSAxMy43NjIgMjguNTk2NyAxNC4yNzE5SDI4LjU1NjdWMTQuMjQxMUMyOC41MzkyIDEzLjc0MzcgMjguNDc4NyAxMy4yNDg4IDI4LjM3NTggMTIuNzYxOUwyNi41NjMzIDMuNzYxOTFIMjIuODU4M0wyNi4zNTgzIDE4LjE1OTRMMzAuMzMyNSAxOC4xNTg2Wk0yMS4wODI1IDE4LjE1ODZWMy43NjEwOEgxNy41NjI1VjE4LjE1ODZIMjEuMDgyNVpNNy44MTU3NCAxNS4xNzg2QzUuNTQwNzMgMTUuMTc4NiAzLjkyOTg5IDEzLjMyNjEgMy45Mjk4OSAxMC44Njk0QzMuOTI5ODkgOC41MTI3NCA1LjU0MDczIDYuNzQxMDcgNy44MTU3NCA2Ljc0MTA3QzEwLjAzMDggNi43NDEwNyAxMS43MDI0IDguNTEyNzQgMTEuNzAyNCAxMC44Njk0QzExLjcwMjEgMTEuNTA2NSAxMS41NzE5IDEyLjEzNjggMTEuMzE5OSAxMi43MjE5TDkuODg5OTIgMTEuMzMzNkw3LjkxNTc0IDEzLjU2NzdMOS4zODU3NSAxNC44NTYxQzguOTQzMjUgMTUuMDc3NyA4LjMzOTA4IDE1LjE3ODYgNy44MTU3NCAxNS4xNzg2Wk0xMy40MzQxIDE4LjYwMTlMMTUuNDI3NCAxNi4zNjYxTDEzLjkxNTggMTUuMTM3N0MxNC43NjE2IDEzLjkzMDIgMTUuMzQ1OCAxMi41MjAyIDE1LjM0NTggMTAuODY5NEMxNS4zNDU4IDYuNzQxMDcgMTIuMjYyNCAzLjUxOTQxIDcuODE0MDcgMy41MTk0MUMzLjM0NDA1IDMuNTE5NDEgMC4yODMyMDMgNi43NDEwNyAwLjI4MzIwMyAxMC44Njk0QzAuMjgzMjAzIDE1LjA5NzcgMy4zNDQwNSAxOC40MDAyIDcuODE0MDcgMTguNDAwMkM5LjM4NDkyIDE4LjQwMDIgMTAuNzk0MSAxNy45Nzc3IDExLjk2MjQgMTcuMjExOUwxMy40MzQxIDE4LjYwMTlaIiBmaWxsPSIjRkY2RjAwIi8+CjxwYXRoIGQ9Ik03Mi4zNDAyIDMuMjk1MTRMNjQuNjM4NyAxMC45OTY3TDcyLjM0MDIgMTguNjk4M0w4MC4wNDE3IDEwLjk5NjdMNzIuMzQwMiAzLjI5NTE0WiIgZmlsbD0iI0ZGNkYwMCIvPgo8cGF0aCBkPSJNNzIuMzM5NyAxOC42OTg0TDY5LjMyNDcgMjEuNzE0M0g1My45MjcyTDY0LjYzOCAxMC45OTY4TDcyLjMzOTcgMTguNjk4NFoiIGZpbGw9IiNGRjZGMDAiLz4KPHBhdGggZD0iTTcyLjMzOTcgMy4yOTUxMkw2NC42MzggMTAuOTk2OEw1My45MjcyIDAuMjg1OTVINjkuMzI0N0w3Mi4zMzk3IDMuMjk1MTJaIiBmaWxsPSIjRkY2RjAwIi8+CjxwYXRoIGQ9Ik04Ny4zMTQgMy43NjYxN0g5Mi40NjQ5Qzk1LjA5MTcgMy43NjYxNyA5Ni45NDQzIDUuMTEwMzQgOTYuOTQ0MyA3LjQ5Mjg0Qzk2Ljk0NDMgOC44MzYxNyA5Ni4yOTM0IDkuOTk3IDk1LjE5NDIgMTAuNTg3OFYxMC42Mjg3Qzk2Ljc4MTcgMTEuMDk3IDk3LjUzNTkgMTIuNTYyOCA5Ny41MzU5IDE0LjAyOTVDOTcuNTM1OSAxNi45MjAzIDk1LjIxNDIgMTguMjIzNyA5Mi41NDY2IDE4LjIyMzdIODcuMzE0VjMuNzY2MTdaTTkyLjQ4NTggOS42NzJDOTMuNjI1OCA5LjY3MiA5NC4yNzc1IDguODU3IDk0LjI3NzUgNy44MTg2N0M5NC4yNzc1IDYuNzgwMzQgOTMuNjQ1OCA2LjAyNzAxIDkyLjQ0NDEgNi4wMjcwMUg4OS45MzlWOS42NzJIOTIuNDg1OFpNOTIuNzUgMTUuOTYyOEM5NC4wOTQyIDE1Ljk2MjggOTQuODQ3NSAxNS4wODc4IDk0Ljg0NzUgMTMuODY2MkM5NC44NDc1IDEyLjY2NDUgOTQuMDczMyAxMS43ODk1IDkyLjc1IDExLjc4OTVIODkuOTM5OVYxNS45NjI4SDkyLjc1WiIgZmlsbD0iIzI3MkEzNSIvPgo8cGF0aCBkPSJNOTkuOTI2OCAzLjc2NjE3SDEwMi41NTNWMTMuMDExMkMxMDIuNTUzIDE0Ljk2NTQgMTAzLjgxNiAxNi4wNjU0IDEwNS43NSAxNi4wNjU0QzEwNy42ODQgMTYuMDY1NCAxMDguOTQ3IDE0Ljk2NTQgMTA4Ljk0NyAxMy4wMTEyVjMuNzY2MTdIMTExLjU3M1YxMy4wMzJDMTExLjU3MyAxNi4yNjg3IDEwOS4yNTMgMTguNDY3OSAxMDUuNzcxIDE4LjQ2NzlDMTAyLjI3MSAxOC40Njc5IDk5LjkyNjggMTYuMjY4NyA5OS45MjY4IDEzLjAzMlYzLjc2NjE3WiIgZmlsbD0iIzI3MkEzNSIvPgo8cGF0aCBkPSJNMTE1LjE1OCAxNC41MTgxQzExNi4wMTMgMTUuMjkxNSAxMTcuMzk4IDE2LjA0NDggMTE4Ljc0MiAxNi4wNDQ4QzEyMC4wNDUgMTYuMDQ0OCAxMjAuODU5IDE1LjM3MzEgMTIwLjg1OSAxNC4zOTU2QzEyMC44NTkgMTEuNjQ1NiAxMTQuMTIgMTIuMjE3MyAxMTQuMTIgNy43MTcyOEMxMTQuMTIgNS4xNzE0NSAxMTYuMjM4IDMuNTIyMjggMTE5LjA0OCAzLjUyMjI4QzEyMC41NTQgMy41MjIyOCAxMjIuMTQzIDQuMDMxNDQgMTIzLjI4MyA1LjA2OTc4TDEyMi4xMjIgNy4yMDgxMkMxMjEuMzI4IDYuNDk1NjEgMTIwLjA4NiA1Ljk0NTYxIDExOC45NDYgNS45NDU2MUMxMTcuNjIyIDUuOTQ1NjEgMTE2Ljc0NyA2LjU5NzI4IDExNi43NDcgNy41OTQ3OEMxMTYuNzQ3IDEwLjI4MjMgMTIzLjQ4NyA5LjU5MDYyIDEyMy40ODcgMTQuMTkyM0MxMjMuNDg3IDE2LjUzNCAxMjEuNzc2IDE4LjQ2ODEgMTE4LjY4MSAxOC40NjgxQzExNi44ODggMTguNDY4MSAxMTUuMDM2IDE3Ljc5NjUgMTEzLjczMyAxNi40OTMxTDExNS4xNTggMTQuNTE4MVoiIGZpbGw9IiMyNzJBMzUiLz4KPHBhdGggZD0iTTEyNi4xNTIgMy43NjYxN0gxMjguNzc4VjE4LjIyMzdIMTI2LjE1MlYzLjc2NjE3WiIgZmlsbD0iIzI3MkEzNSIvPgo8cGF0aCBkPSJNMTMyLjE1MyAzLjc2NjE3SDEzNC43NzlMMTQwLjI1NiAxMi4xMTUzQzE0MC43ODUgMTIuOTcwMyAxNDEuNDU4IDE0LjM1NDUgMTQxLjQ1OCAxNC4zNTQ1SDE0MS40OThDMTQxLjQ5OCAxNC4zNTQ1IDE0MS4zNTUgMTIuOTcwMyAxNDEuMzU1IDEyLjExNTNWMy43NjYxN0gxNDMuOTYyVjE4LjIyMzdIMTQxLjM1NUwxMzUuODc4IDkuODk1MzNDMTM1LjMyOSA5LjA0MDMzIDEzNC42NzcgNy42NTYxNyAxMzQuNjc3IDcuNjU2MTdIMTM0LjYzNkMxMzQuNjM2IDcuNjU2MTcgMTM0Ljc3OSA5LjA0MDMzIDEzNC43NzkgOS44OTUzM1YxOC4yMjM3SDEzMi4xNTNWMy43NjYxN1oiIGZpbGw9IiMyNzJBMzUiLz4KPHBhdGggZD0iTTE0Ny4zNzUgMy43NjYxN0gxNTYuMDI5VjYuMDI3MDFIMTUwVjkuODE0NUgxNTQuODY2VjEyLjA3NDVIMTUwVjE1Ljk2MjhIMTU2LjM1MlYxOC4yMjM3SDE0Ny4zNzVWMy43NjYxN1oiIGZpbGw9IiMyNzJBMzUiLz4KPHBhdGggZD0iTTE1OS4zOSAxNC41MTgxQzE2MC4yNDUgMTUuMjkxNSAxNjEuNjI5IDE2LjA0NDggMTYyLjk3MyAxNi4wNDQ4QzE2NC4yNzcgMTYuMDQ0OCAxNjUuMDkxIDE1LjM3MzEgMTY1LjA5MSAxNC4zOTU2QzE2NS4wOTEgMTEuNjQ1NiAxNTguMzUyIDEyLjIxNzMgMTU4LjM1MiA3LjcxNzI4QzE1OC4zNTIgNS4xNzE0NSAxNjAuNDY5IDMuNTIyMjggMTYzLjI3OSAzLjUyMjI4QzE2NC43ODYgMy41MjIyOCAxNjYuMzc0IDQuMDMxNDQgMTY3LjUxNCA1LjA2OTc4TDE2Ni4zNTMgNy4yMDgxMkMxNjUuNTU5IDYuNDk1NjEgMTY0LjMxNyA1Ljk0NTYxIDE2My4xNzcgNS45NDU2MUMxNjEuODUzIDUuOTQ1NjEgMTYwLjk3OCA2LjU5NzI4IDE2MC45NzggNy41OTQ3OEMxNjAuOTc4IDEwLjI4MjMgMTY3LjcxOCA5LjU5MDYyIDE2Ny43MTggMTQuMTkyM0MxNjcuNzE4IDE2LjUzNCAxNjYuMDA3IDE4LjQ2ODEgMTYyLjkxMiAxOC40NjgxQzE2MS4xMiAxOC40NjgxIDE1OS4yNjcgMTcuNzk2NSAxNTcuOTY1IDE2LjQ5MzFMMTU5LjM5IDE0LjUxODFaIiBmaWxsPSIjMjcyQTM1Ii8+CjxwYXRoIGQ9Ik0xNzAuNTMgMTQuNTE4MUMxNzEuMzg1IDE1LjI5MTUgMTcyLjc3IDE2LjA0NDggMTc0LjExNCAxNi4wNDQ4QzE3NS40MTcgMTYuMDQ0OCAxNzYuMjMxIDE1LjM3MzEgMTc2LjIzMSAxNC4zOTU2QzE3Ni4yMzEgMTEuNjQ1NiAxNjkuNDkyIDEyLjIxNzMgMTY5LjQ5MiA3LjcxNzI4QzE2OS40OTIgNS4xNzE0NSAxNzEuNjEgMy41MjIyOCAxNzQuNDIgMy41MjIyOEMxNzUuOTI2IDMuNTIyMjggMTc3LjUxNSA0LjAzMTQ0IDE3OC42NTUgNS4wNjk3OEwxNzcuNDk0IDcuMjA4MTJDMTc2LjcgNi40OTU2MSAxNzUuNDU4IDUuOTQ1NjEgMTc0LjMxOCA1Ljk0NTYxQzE3Mi45OTQgNS45NDU2MSAxNzIuMTE5IDYuNTk3MjggMTcyLjExOSA3LjU5NDc4QzE3Mi4xMTkgMTAuMjgyMyAxNzguODU5IDkuNTkwNjIgMTc4Ljg1OSAxNC4xOTIzQzE3OC44NTkgMTYuNTM0IDE3Ny4xNDggMTguNDY4MSAxNzQuMDUzIDE4LjQ2ODFDMTcyLjI2IDE4LjQ2ODEgMTcwLjQwOCAxNy43OTY1IDE2OS4xMDUgMTYuNDkzMUwxNzAuNTMgMTQuNTE4MVoiIGZpbGw9IiMyNzJBMzUiLz4KPC9zdmc+Cg==',
  brandTarget: '_self',

  gridCellSize: 10,
})
