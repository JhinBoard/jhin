import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
/**
 * @deprecated Please use the icon from @toeverything/components/ui. If it does not exist, contact the designer to add。
 */
export const PencilDotDuotoneIcon: FC<SvgIconProps> = props => (
    <SvgIcon {...props}>
        <path
            style={{ fill: 'var(--color-0)' }}
            d="M17.315 10.76c.417-.382.664-.911.685-1.472a2.101 2.101 0 0 0-.57-1.518 2.25 2.25 0 0 0-1.452-.754 2.04 2.04 0 0 0-1.576.47L9.78 11.084l-1.65 3.104a.933.933 0 0 0 .14 1.07.966.966 0 0 0 .429.291c.206.069.43.069.635 0l3.351-1.183 4.63-3.606Zm-1.948-2.196a.607.607 0 0 1 .446-.122.83.83 0 0 1 .512.276.682.682 0 0 1 0 .956l-4.416 3.42-.586.203-.677-.81.281-.527 4.44-3.396Z"
        />
        <path
            style={{ fill: 'var(--color-1)' }}
            d="M6.825 17a.818.818 0 0 0 .826-.81c0-.448-.37-.81-.826-.81a.818.818 0 0 0-.825.81c0 .447.37.81.825.81Z"
        />
    </SvgIcon>
);
