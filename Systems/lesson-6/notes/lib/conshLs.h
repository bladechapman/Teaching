#ifndef _CONSH_LS_
#define _CONSH_LS_

typedef struct _consh_folder {
    int length;
    char **entries;
} consh_folder;


consh_folder *ls();
void consh_folder_free(consh_folder *folder);
void consh_folder_print(consh_folder *folder);

#endif
