import cn from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

export type TextVariantProps = VariantProps<typeof textVariants>;

export const textVariants = cva('text-black font-sfproreg', {
  variants: {
    size: {
      xs: 'text-[10px]',
      md: 'text-[12px]',
      lg: 'text-[14px]',
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

type HeadingProps = React.HTMLAttributes<HTMLParagraphElement> &
  TextVariantProps;

const Text = ({ children, size, className, ...props }: HeadingProps) => {
  return (
    <p className={cn(textVariants({ size }), className)} {...props}>
      {children}
    </p>
  );
};

export { Text };
