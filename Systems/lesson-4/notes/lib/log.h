#ifndef _LOG_
#define _LOG_

typedef struct _log_node {
    char *content;
    struct _log_node *next;
} log_node;


typedef struct _log_t {
    log_node *first;
    log_node *last;
} log_t;


log_node *constructNode();
void setNodeContent(log_node *node, char *newContent);
void deconstructNode(log_node *node);
log_t *constructLog();

#endif
