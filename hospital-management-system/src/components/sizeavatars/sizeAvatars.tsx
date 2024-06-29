import React from 'react';
import {Avatar, Stack} from "@chakra-ui/react";
export class SizeAvatars extends React.Component<any, any>{
    render() {
        return(
            <Stack direction="col" spacing={2} className={' h-16 '}>
                <Avatar
                    alt="Remy Sharp"
                    src="src/assets/dog(3).jpg"
                    sx={{ width: 60, height: 60 }}
                />

                <Avatar
                    alt="Remy Sharp"
                    src="src/assets/doc(6).jpg"
                    sx={{ width: 40, height: 40 }}
                />
                <Avatar
                    alt="Remy Sharp"
                    src="src/assets/doc (1).jpg"
                    sx={{ width: 28, height: 28 }}
                />
                <Avatar alt="Remy Sharp"
                        src="src/assets/doc(5).jpg"
                        sx={{ width: 28, height: 28 }}
                />

                <Avatar alt="Remy Sharp"
                        src="src/assets/doc (4).jpg"
                        sx={{ width: 28, height: 28 }}
                />

            </Stack>
        );
    }

}