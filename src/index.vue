<script>
export default {
  functional: true,
  props: {
    hasAutoHeight: { type: Boolean },
    icon: { required: true },
    keepColors: { type: Boolean },
    size: { default: 'm' },
  },
  render: (h, context) => (
    <context.props.icon
      {...context.data}
      aria-hidden="true"
      class={[
        'icon',
        context.$style[`size-${context.props.size}`],
        {
          [context.$style.hasAutoHeight]: context.props.hasAutoHeight,
          [context.$style.keepColors]: context.props.keepColors,
        },
      ]}
      focusable="false"
    />
  ),
}
</script>

<style lang="scss" module>
:global(.icon) {
  &:not(.has-auto-height) {
    height: 1em;
  }

  &:not(.keep-colors) {
    path {
      fill: currentColor !important;
    }
  }

  &.size-l {
    font-size: 1.5rem;
  }
}
</style>
